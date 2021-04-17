#!/bin/bash
usage(){
	echo 'Usage: 
			getoptc <optstring> <parameters>
			getoptc [options] [--] <optstring> <parameters>
			getoptc [options] -s|--short <optstring> [options] [--] <parameters>
	Options:
			-s, --short <shortopts>		the short options to be recognized
			-l, --long	<longopts>		the long options to be recognized
			-q, --quiet								disable error reporting
			-h, --help								display this help'
}

fatal() {
    for i; do
        echo -e "${i}" >&2
    done
    exit 1
}

# For long option processing
next_arg() {
    if [[ $OPTARG == *=* ]]; then
        # for cases like '--opt=arg'
        OPTARG="${OPTARG#*=}"
    else
        # for cases like '--opt arg'
        OPTARG="${args[$OPTIND]}"
        OPTIND=$((OPTIND + 1))
    fi
}

split () {
	str=$1
	while [ ${#str} -ne 0 ]; do
		f=${str:0:2}
		if [ ${f:1:2} == ':' ]; then
			echo $f
			str=${str:2:${#str}}
		else
			echo ${str:0:1}
			str=${str:1:${#str}}
		fi
	done
}

silent=0
short=""
long=""
optspec="s:l:qh-:"
options=''

if [ $# == 2 ]; then
	short=$1
	shift
fi

args=("" "$@")  # dummy first element so $1 and $args[1] are aligned

# Get command options
while getopts "$optspec" optchar; do
    case "$optchar" in
        h) usage; exit 0 ;;
        s) short="$OPTARG" ;;
        l) long="$OPTARG" ;;
				q) silent=1 ;;
        -) # long option processing
            case "$OPTARG" in
                help)
                    usage; exit 0 ;;
                short) next_arg
                    short="$OPTARG" ;;
                long) next_arg
                    long="$OPTARG" ;;
                quiet)
                    silent=1 ;;
                -) break ;;
                *) fatal "Unknown option '--${OPTARG}'" "see '${0} --help' for usage" ;;
            esac
            ;;
        *) fatal "Unknown option: '-${OPTARG}'" "See '${0} --help' for usage" ;;
    esac
done

shift $((OPTIND-1))
shortadj="$short"
if [ $silent -eq 1 ]; then
	shortadj=":$shortadj"
fi
if [ -n "$long" ]; then
	shortadj="$shortadj-:"
	short="$short-:"
fi
shorts=($( split $short ))
longs=($(echo "$long" | tr ',' '\n'))
echo "short=$short, long=$long, silent=$silent, params='$@'"
for i in "${longs[@]}"; do echo $i; done
for i in "${shorts[@]}"; do echo $i; done

# get returned options
#while getopts "$shortadj" opt; do
#	for i in "${shorts[@]}"; do
#		if [ "$opt" -eq "$i" ]; then
#			options=$options' -'"$i"
#			break
#	done
#done
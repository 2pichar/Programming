#include "standard.cpp"

using namespace std;

string text;
char* file;
void output();
void signal_handler(int signum);

int main(int argc, char *argv[]){
		signal(SIGINT, signal_handler);
		file = argv[1];
		cout << "\n" << "Editor 1.0					" << file << "				 Edited" << endl;
		string nextline;
		while(true){
				getline(cin, nextline);
				text += nextline + "\n";
		}
}

void output(){
	ofstream fs(file, ofstream::app);
	fs << text;
	fs.close();
}
void signal_handler(int signum){
	output();
	cout << text;
	exit(signum);
}
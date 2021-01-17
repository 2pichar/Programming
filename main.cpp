#include "C++/standard.hpp"

using namespace std;

int main(){
	auto callback = [&](){cout << "Your Timer Has Gone Off!" << endl;};
	map <string, timer::Timeout> timers;
	timers.emplace(to_string(100), timer::setTimeout(callback, 1000));
	while(true){}
}
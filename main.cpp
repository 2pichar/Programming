#include "C++/standard.hpp"

using namespace std;
using namespace timer;

int main(){
	auto callback = [&](){cout << "Your Timer Has Gone Off!" << endl;};
	map <string, Timeout> timers;
	timers.emplace(to_string(100), setTimeout(callback, 1000));
	cout << timers.size() << endl;
	while(!timers["100"].getCleared()){}
}
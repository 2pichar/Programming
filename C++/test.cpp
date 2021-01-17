#include "functions.cpp"
namespace {
	void print(auto thing){
		std::cout << thing;
	}
	void println(auto thing){
		std::cout << thing << endl;
	}
}
int main(){
	::println(::add(1, 2));
	::println("");
	::println("hello!");
	::print("hi!");
}
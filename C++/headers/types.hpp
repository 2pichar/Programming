#include <iostream>
#include <map>
using namespace std;

map<string, string> types = {{"i", "int"},{"Pi", "int*"},{"PKi", "const int*"},{"j", "unsigned int"},{"Pj", "unsigned int*"},{"PKj", "const unsigned int*"},{"d", "double"},{"Pd", "double*"},{"PKd", "const double*"},{"f", "float"},{"Pf", "float*"},{"PKf", "const float*"},{"l", "long"},{"Pl", "long*"},{"PKl", "const long*"},{"m", "unsigned long"},{"Pm", "unsigned long*"},{"PKm", "const unsigned long*"},{"s", "short"},{"Ps", "short*"},{"PKs", "const short*"},{"x", "long long"},{"Px", "long long*"},{"PKx", "const long long*"},{"y", "unsigned long long"},{"Py", "unsigned long long*"},{"PKy", "const long long*"},{"e", "long double"},{"Pe", "long double*"},{"PKe", "const long double*"},{"c", "char"},{"Pc", "char*"},{"PKc", "const char*"},{"h", "unsigned char"},{"Ph", "unsigned char*"},{"PKh", "const unsigned char*"},{"b", "bool"},{"Pb", "bool*"},{"PKb", "const bool*"},{"w", "wchar_t"},{"Pw", "wchar_t*"},{"PKw", "const wchar_t*"},{"v", "void"},{"Pv", "void*"},{"PKv", "const void*"}};

template <typename T>
string getType(T type){
	string id(const_cast<char*>(typeid(type).name()));
	return types[id];
};
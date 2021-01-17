#include <vector>
#include <string>
//#include <charconv>
#include <string_view>

using namespace std;

vector<string> split(string text, char delim){
	vector<string> words;
	string cWord;
	char empty = ""[0];
	char letter;
	if(delim == empty){
		for(int i = 0; i < text.length(); i++){
			letter = text[i];
			cWord += letter;
			words.push_back(cWord);
			cWord = "";
		}
	} else {
		for(int i = 0; i < text.length(); i++){
			letter = text[i];
			if(letter != delim){
				cWord += letter;
				
			} else {
				words.push_back(cWord);
				cWord = "";
			}
		}
		words.push_back(cWord);
	}
	return words;
}
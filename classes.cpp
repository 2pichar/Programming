#include "C++/standard.hpp"
using namespace std;

namespace Birds {
	class Bird {
		public:
			Bird(){};
			Bird(string name, int age, string color);
			void fly();
			void climb();
			string getName();
			int getAge();
			string getColor();
		protected:
			string name;
			int age{0};
			string color = "multicolored";
	};
	Bird::Bird(string name, int age, string color){
		name = name;
		age = age;
		color = color;
	}
	int Bird::getAge(){
		return age;
	}
	string Bird::getName(){
		return name;
	}
	string Bird::getColor(){
		return color;
	}
	class Parakeet : public Bird {
		public:
			Parakeet(){};
			Parakeet(string name, int age, string color, int cuteness){
				name = name;
				age = age;
				color = color;
				cuteness = cuteness;
			}
			void test();
			void beCute();
			double getCuteness();
		private:
			int cuteness;
	};
	double Parakeet::getCuteness(){
		return cuteness;
	}
	void Parakeet::test(){
		cout << name << endl;
		cout << age << endl;
		cout << color << endl;
		cout << cuteness << endl;
	}
}
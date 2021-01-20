#pragma once
#include <iostream>
#include <thread>
#include <chrono>

namespace timer {
	class Timeout {
		public:
			Timeout(auto function, int delay){
				std::thread t([=]() {
					if(this->cleared) return;
					std::this_thread::sleep_for(std::chrono::milliseconds(delay));
					if(this->cleared) return;
					function();
				});
				t.detach();
			}
			void clear();
			bool getCleared();
		private:
			bool cleared = false;
	};

	class Interval {
		public:
			Interval(auto function, int interval){
				std::thread t([=]() {
					while(true) {
							if(this->cleared) return;
							std::this_thread::sleep_for(std::chrono::milliseconds(interval));
							if(this->cleared) return;
							function();
					}
			});
			t.detach();
			}
			void clear();
			bool getCleared();
		private:
			bool cleared = false;
	};



	Timeout setTimeout(auto function, int delay) {
			return Timeout(function, delay);
	}

	Interval setInterval(auto function, int interval) {
			return Interval(function, interval);
	}

	void Timeout::clear() {
			this->cleared = true;
	}
	void Interval::clear() {
			this->cleared = true;
	}
	bool Timeout::getCleared(){
		return this->cleared;
	}
	bool Interval::getCleared(){
		return this->cleared;
	}
}

#include <iostream>
#include <fstream>

using namespace std;

int main() {
    ifstream d("baseballforce.d");
    ofstream json("baseballforce.json");
    json << "[\n";
    string t, f;
    while (d >> t >> f) {
        json << "\t[" << t << ", " << f << "],\n";
    }
    json << "]\n";
    d.close();
    json.close();
    return 0;
}
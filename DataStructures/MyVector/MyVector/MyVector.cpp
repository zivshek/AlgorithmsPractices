#include "MyVector.h"

template <typename T>
MyVector<T>::MyVector() : _capacity(5), _size(0) {
    _data = new T[_capacity];
}

template <typename T>
MyVector<T>::MyVector(std::initializer_list<T> init) : _size(0) {
    _capacity = init.size();
    _data = new T[_capacity];
    for (T const& el : init)
        push_back(el);
}

template <typename T>
MyVector<T>::MyVector(unsigned int size) : _capacity(size), _size(0) {
    _data = new T[size];
}

template <typename T>
MyVector<T>::MyVector(MyVector<T> const& mv) : _capacity(mv._capacity), _size(mv._size) {
    _data = new T[_capacity];
    for (unsigned int i = 0; i < _size; ++i) {
        _data[i] = mv._data[i];
    }
}

template <typename T>
MyVector<T>::~MyVector() {
    delete[] _data;
}

template <typename T>
bool MyVector<T>::empty() const {
    return _size == 0;
}

template <typename T>
unsigned int MyVector<T>::size() const {
    return _size;
}

template <typename T>
void MyVector<T>::push_back(T const& elem) {
    if (_size == _capacity)
        expand();

    _data[_size++] = elem;
}

template <typename T>
void MyVector<T>::expand() {
    _capacity *= 2;
    T* data = new T[_capacity];
    for (int i = 0; i < _size; ++i) {
        data[i] = _data[i];
    }

    delete[] _data;
    _data = data;
}

template <typename T>
void MyVector<T>::pop_back() {
    _size--;
}

template <typename T>
void MyVector<T>::clear() {
    _size = 0;
}

template <typename T>
T& MyVector<T>::front() const {
    return _data[0];
}

template <typename T>
T& MyVector<T>::back() const {
    return _data[_size - 1];
}

template <typename T>
T& MyVector<T>::operator[](unsigned int index) {
    if (index >= _size)
        throw std::out_of_range("out of range");
    return _data[index];
}

template <typename T>
MyVector<T>& MyVector<T>::operator=(MyVector<T> const& other) {
    delete[] _data;
    _capacity = other._capacity;
    _size = other._size;
    _data = new T[_capacity];
    for (unsigned int i = 0; i < _size; i++) {
        _data[i] = other._data[i];
    }
    return *this;
}
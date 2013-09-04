#pragma once

#include "pebble_os.h"

void create_dict();

void add_string_to_dict(uint32_t key, char *str);
void add_uint8_to_dict(uint32_t key, uint8_t i);
void add_uint16_to_dict(uint32_t key, uint16_t i);
void add_uint32_to_dict(uint32_t key, uint32_t i);
void add_int8_to_dict(uint32_t key, int8_t i);
void add_int16_to_dict(uint32_t key, int16_t i);
void add_int32_to_dict(uint32_t key, int32_t i);

void send_dict_to_pebble();

void test();

average_temperature_in_c = {vancouver: 13.7, edmonton: 8.5, Calgary: 10.5}
average_temperature_in_f = average_temperature_in_c.transform_values {|val| val * 9 / 5 + 32}

p average_temperature_in_c
p average_temperature_in_f
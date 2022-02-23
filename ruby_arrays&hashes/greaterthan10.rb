my_array = [1,4,5,23,14,"Hello there", false, nil]

print my_array.select{|val| (val.is_a? Integer)&&(val > 10)}
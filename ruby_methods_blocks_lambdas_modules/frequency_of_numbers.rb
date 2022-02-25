def frequency_of_numbers(arr)
    arr.each_with_object({}){|number,hash| hash[number]=hash.key?(number) ? hash[number] + 1 : 1  }
end

array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
p frequency_of_numbers(array)
print "Enter the number:"
i = gets.to_i
counter = 2
result = [1,1]
while counter < i
    result.push(result[counter-2] + result[counter-1])
    counter += 1
end
if i <= 1
    print [1]
else
    print result 
end
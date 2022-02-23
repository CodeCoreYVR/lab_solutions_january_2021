print "Enter the number:"
num = gets.to_i
arr = [[1],[1,1]]
for i in 2..num
    temp =[1]
    for j in 0...arr[i-1].length-1
        temp.push(arr[i-1][j]+arr[i-1][j+1])
    end
    temp.push(1)
    arr.push(temp)
end
print arr
arr.each{|sub|
    puts sub.join(' ')
}
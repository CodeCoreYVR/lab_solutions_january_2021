arr = (1..15).to_a.shuffle
print arr
print "\n"
for i in 0...arr.length
    for j in 0...arr.length-1-i
        if arr[j]>arr[j+1]
            temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
        end
    end
end
print arr
print "\n"
def factorial(num)
    if num == 1
        1
    else
        num * factorial(num - 1)
    end
end

p factorial(5)
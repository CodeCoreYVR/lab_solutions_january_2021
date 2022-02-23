questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]
puts questions.select { |question|  question.length >= 15  }

questions.each do |question|
    if question.length >= 15
        puts question 
    end
end
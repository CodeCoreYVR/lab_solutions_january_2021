def arr_from_hash(hash_input)
    p hash_input.values.collect {|population| population / 1000.0 }
end

bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }

arr_from_hash bc_cities_population

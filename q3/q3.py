from itertools import chain, combinations

def powerset(iterable):
    "powerset([1,2,3]) --> () (1,) (2,) (3,) (1,2) (1,3) (2,3) (1,2,3)"
    s = list(iterable)  # allows duplicate elements
    return chain.from_iterable(combinations(s, r) for r in range(len(s)+1))

def can_create(list_of_strings, input_string):
    can_create = False
    for i, combo in enumerate(powerset(list_of_strings), 1):
        val = ''.join(combo)
        if val and val == input_string:
            can_create = True
    return can_create

list_of_strings = ['back', 'end', 'front', 'tree']
input_string = 'backend'
result = can_create(list_of_strings, input_string)
print('List: %s \nInput String: %s \nResult: %s\n' %(list_of_strings, input_string, result))

input_string = 'frontyard'
result = can_create(list_of_strings, input_string)
print('List: %s \nInput String: %s \nResult: %s\n' %(list_of_strings, input_string, result))

input_string = 'frontend'
result = can_create(list_of_strings, input_string)
print('List: %s \nInput String: %s \nResult: %s\n' %(list_of_strings, input_string, result))
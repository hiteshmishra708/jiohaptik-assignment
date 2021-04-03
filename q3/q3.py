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

result = can_create(['back', 'end', 'front', 'tree'], 'backend')
print(result)
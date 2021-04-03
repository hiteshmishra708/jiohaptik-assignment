def check_formation(input_string, keywords):
    for i in range(len(input_string)):
        if input_string[:i+1] in keywords:
            if i == len(input_string)-1:
                return True
            else:
                if check_formation(input_string[ i+1: ], keywords):
                    return True
    return False

def can_create(list_of_strings, input_string):
    keywords = { i: 1 for i in list_of_strings }
    return check_formation(input_string, keywords)

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
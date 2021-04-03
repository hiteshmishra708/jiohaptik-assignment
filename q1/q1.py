import os
def readFile(name):
    "read file and sort users by find active users"
    array = []
    allUsers = []
    with open(os.getcwd() + '/q1/chats.txt', "r") as f:
        for line in f:
            array.append(line)
    for i in array:
        allUsers.append(i[ i.find("<")+1 : i.find(">")])

    users = list(set(allUsers))
    userDict = {user:allUsers.count(user) for user in users}
    sortedDict = {}
    sortedDict = dict(sorted([(value,key) for (key,value) in userDict.items()]))
    sortedDict = {v: k for k, v in sortedDict.items()}
    sortedUser = list(sortedDict)
    print("All users: ", sortedUser)

    i = -1
    print("Most Active users are: ")
    while(i >= -3):
        print("Name: ", sortedUser[i], " Total Messages: ",sortedDict[sortedUser[i]])
        i -= 1

readFile("./chats.txt")
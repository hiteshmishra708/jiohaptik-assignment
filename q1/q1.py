import os
def get_active_users():
    "return active users from chats.txt"
    chats = open(os.getcwd() + '/q1/chats.txt', "r")
    users = {}
    for chat in chats:
        try:
            name = chat[:chat.index(":")].strip()
            if name not in users:
                users[name] = 1
            else:
                users[name] += 1
        except ValueError:
            pass
    chats.close()
    active_users = sorted(users.iteritems(), key=lambda(k, v): v, reverse=True)[:3]
    return [k.replace("<", "").replace(">", "") for (k, v) in active_users]

print(get_active_users())
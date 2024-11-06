Rel=[231,240,196,280,207]
arr=[]
for i in range(len(Rel)):
    num=Rel[i]
    for j in range(len(Rel)):
        value=Rel[j]-num
        arr.append(value)

print("Value:",value) 
print(arr)
print(max(arr))

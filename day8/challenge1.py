
def parse_file():
  file = open("./puzzleInput.txt", "r")
  data = file.read().split("\n")
  file.close
  parsed_data = list(map(lambda d: d.split(" "), data))
  return parsed_data

def get_accumulator():
  parsed_data = parse_file()
  i = 0
  acc_int = 0
  processed_indexes = []
  
  while i < len(parsed_data):
    if i in processed_indexes:
      return acc_int
    else:
      processed_indexes.append(i)
      if parsed_data[i][0] == "acc":
        acc_int += int(parsed_data[i][1])
        i += 1
      elif parsed_data[i][0] == "jmp":
        i += int(parsed_data[i][1])
      else:
        i += 1
  return "No loop"

print(get_accumulator())
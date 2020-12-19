import copy

def parse_file():
  file = open("./puzzleInput.txt", "r")
  data = file.read().split("\n")
  file.close
  parsed_data = list(map(lambda d: d.split(" "), data))
  return parsed_data

def get_accumulator(parsed_data):
  i = 0
  acc_int = 0
  history = []

  while i < len(parsed_data):
    if i in history:
      return False
    history.append(i)
    if parsed_data[i][0] == "acc":
      acc_int += int(parsed_data[i][1])
      i += 1
    elif parsed_data[i][0] == "jmp":
      i += int(parsed_data[i][1])
    else:
      i += 1
  return acc_int


def try_instructions():
  BaseInstructions = parse_file()
  data_to_try = copy.deepcopy(BaseInstructions)
  triedLinesIndexes = []

  while(get_accumulator(data_to_try) == False):
    data_to_try = copy.deepcopy(BaseInstructions)
    i = 0
    while (BaseInstructions[i][0] != "jmp" or BaseInstructions[i][0] == "nop") or (i in triedLinesIndexes):
      i += 1
    if BaseInstructions[i][0] == "jmp":
        data_to_try[i][0] = "nop"
    else:
      data_to_try[i][0] = "jmp"
    triedLinesIndexes.append(i)
  return get_accumulator(data_to_try)

print(try_instructions())
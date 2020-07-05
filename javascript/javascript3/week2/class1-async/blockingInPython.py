import time
import random


def runAfterInterval(timeInSeconds):
    print(f'I will sleep for {timeInSeconds} seconds')
    time.sleep(timeInSeconds)
    print(f'I wokeup after {timeInSeconds} seconds')


def main():
    for _ in range(10):
        runAfterInterval(random.random() * 5)


if __name__ == "__main__":
    main()

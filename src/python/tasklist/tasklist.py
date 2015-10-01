__author__ = 'abe'

import redis
from utilities import *


class TaskList:

    __redis__ = None

    def __init__(self):
        """
        Constructor.
        """
        self.__redis__ = redis.StrictRedis('localhost')

    def get_tasks(self):
        """
        Get the task records.
        @return: List of task objects (python dictionary).
        """
        tasks = self.__redis__.smembers('taskList')

        result = []
        for task_name in tasks:
            result.append(decode_record(self.__redis__.get(task_name)))

        if len(result) == 0:
            result = None

        return result

    def get_task_names(self):
        """
        Get the names (keys) of the tasks.
        @return: List of task names.
        """
        task_names = []

        tasks = self.get_tasks()
        if tasks is not None:
            for task in tasks:
                task_names.append(task['name'])

        return task_names

    def create_task(self, task_name):
        """
        Create a new tasks, add it to the tasks.
        @return: redis result.
        """

        data = {'name': task_name}

        result = self.__redis__.set(task_name, encode_record(data))
        if result:
            result = self.__redis__.sadd('taskList', task_name)
        return result

    def remove_task(self, task_name):
        """
        Remove an existing task and remove it from the list of tasks.
        @return: redis result.
        """
        return self.__redis__.srem('taskList', task_name)



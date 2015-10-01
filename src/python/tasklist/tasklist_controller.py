"""
Controller for our app, does the routes for us and calls the methods of the TaskList.
"""

from flask import Flask, render_template

from tasklist import TaskList

app = Flask(__name__)
task_list = TaskList()


@app.route('/')
def index():
    view_data = {
        'title': 'Task List',
        'message': 'Welcome to Task List!  To see the requests available, try help.'
    }
    return render_template('message.html', view_data=view_data)
    #return view_data['message']

@app.route('/help/')
def help():
    return 'Requests available: show-tasks, create-task, remove-task'

@app.route('/show-tasks/')
def get_tasks():

    task_names = task_list.get_task_names()
    if len(task_names) == 0:
        result = "There are no tasks."
    else:
        result = ", ".join(task_names)

    return result

@app.route('/create-task/<name>')
def create_task(name):

    if task_list.create_task(name):
        result = "Task: {}, created.".format(name)
    else:
        result = "Unable to create task: {}".format(name)
    return result

@app.route('/remove-task/<name>')
def create_list(name):

    if task_list.remove_task(name):
        result = "Task: {}, removed.".format(name)
    else:
        result = "Unable to remove task: {}".format(name)
    return result


if __name__ == '__main__':
    app.run(debug=True)
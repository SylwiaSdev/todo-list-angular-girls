import { StorageService } from './storage.service';
import { TodoItem } from './../interfaces/todo-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todoList: TodoItem[] = [];

  todoListStorageKey = 'Todo_List';

  defaultTodoList = [
    {title: 'install'},
    {title: 'create new app'},
    {title: 'serve app'},
  ];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(this.todoListStorageKey) || this.defaultTodoList;
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  private saveList () {
    this.storageService.setData(this.todoListStorageKey, this.todoList);
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.storageService.setData(this.todoListStorageKey, this.todoList);
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}

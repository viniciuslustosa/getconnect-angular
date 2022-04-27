import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class HistoryService {

  constructor() {}

  getAll() {
    const historyLocal = localStorage.getItem("@history")
    const history = historyLocal ? JSON.parse(historyLocal) : null
    return history
  }

  add(film: Film) {
    const historyLocal = localStorage.getItem("@history")
    const history = historyLocal ? JSON.parse(historyLocal) : null
    if(history === null) {
        localStorage.setItem('@history', JSON.stringify([film]))
    } else {
        const index = history.map((data: Film) => { return data.imdbID }).indexOf(film.imdbID)
        if(index > -1) {
            history.splice(index, 1)
        }
        history.unshift(film)
        localStorage.setItem('@history', JSON.stringify(history))
    }
  }

  remove(film: Film) {
    const historyLocal = localStorage.getItem("@history")
    const history = historyLocal ? JSON.parse(historyLocal) : null
    if(history === null) {
        return
    } else {
        const index = history.map((data: Film) => { return data.imdbID }).indexOf(film.imdbID)

        if(index > -1) {
            history.splice(index, 1)
            localStorage.setItem('@history', JSON.stringify(history))
        }
    }
  }
}

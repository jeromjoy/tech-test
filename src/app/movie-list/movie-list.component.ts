import { Component, OnInit } from '@angular/core';
import MOVIES_LIST from '../../assets/movies-data.json';
import { Category, MovieTree, NodeValue } from './movie';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  title = 'Movies';
  treeControl = new NestedTreeControl<MovieTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MovieTree>();
  constructor() {

    const movies: {[id: number]: NodeValue } = {};

    const categories = MOVIES_LIST.categories.reduce((categoryMap: {[id: number]: Category}, category) => {
      categoryMap[category.id] = category;
      return categoryMap;
    }, {});

    const tree = Object.values(MOVIES_LIST.movies
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    .reduce((acc: {[id: number]: MovieTree}, movie) => {
      movie.categories.forEach(cat => {
        if (acc[cat] === undefined) {
          acc[cat] = {
            value: {
              type: 'category',
              id: categories[cat].id,
              name: categories[cat].name
            },
            children: []
          };
        }
        if (!movies[movie.id]) {
          movies[movie.id] = {
            type: 'movie',
            id: movie.id,
            name: movie.name
          };
        }
        acc[cat].children?.push({
          value: movies[movie.id],
        });

      });
      return acc;
    }, {}));

    this.dataSource.data = tree;


  }

  hasChild = (_: number, node: MovieTree) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}

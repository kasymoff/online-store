import * as React from 'react';
import Button from '@mui/material/Button';

export default class Search {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filterGroup');
  }

  createTitle(tit: string): void {
    const title = document.createElement('h4');
    title.textContent = tit;
    title.classList.add('searchTitle');
    this.container.append(title);
  }

  createSearchField(): void {
    const searchWrapper = document.createElement('div');
    searchWrapper.classList.add('searchWrapper');
    const input = document.createElement('input');
    input.classList.add('search', 'false');
    input.placeholder = 'Введите текст';
    input.type = 'text';
    searchWrapper.append(input);
    this.container.append(searchWrapper);
  }

  createSortField(): void {
    const input = document.createElement('select');
    input.id = 'select';
    const option1 = document.createElement('option');
    option1.value = 'lowName';
    option1.textContent = 'По названию, от А до Я';
    const option2 = document.createElement('option');
    option2.value = 'highName';
    option2.textContent = 'По названию, от Я до А';
    input.append(option1, option2);
    this.container.append(input);
  }

  createResetButtons(): void {
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const resetFiltersButton = document.createElement('button');
    const resetSettingsButton = document.createElement('button');
    resetFiltersButton.textContent = 'Сброс фильтров';
    resetSettingsButton.textContent = 'Сброс настроек';
    buttons.append(resetFiltersButton, resetSettingsButton);
    this.container.append(buttons);
  }

  render() {
    this.createTitle('Поиск');
    this.createSearchField();
    this.createTitle('Сортировка');
    this.createSortField();
    this.createResetButtons();
    return this.container
  }
}
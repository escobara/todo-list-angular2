/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('Component: ItemList', () => {
  it('should create an instance', () => {
    let component = new ItemListComponent();
    expect(component).toBeTruthy();
  });
});

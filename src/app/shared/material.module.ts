import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';

const exportedMatModules = [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRippleModule,
    MatTooltipModule,
    MatBadgeModule
];


@NgModule({
    declarations: [],
    imports: [CommonModule, ...exportedMatModules],
    exports: [...exportedMatModules]
  })
  export class MaterialModule {}
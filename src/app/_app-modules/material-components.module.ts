import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTableModule
} from '@angular/material';
import { LayoutModule } from '../../../node_modules/@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { CommonModule } from '../../../node_modules/@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        LayoutModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatTableModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatIconModule,
        MatSnackBarModule,
        MatListModule,
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        MatCheckboxModule,
        LayoutModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatTableModule
    ],
    providers: []
})

export class MaterialComponentsModule { }

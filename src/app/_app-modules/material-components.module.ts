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
    MatProgressBarModule
} from '@angular/material';
import { LayoutModule } from '../../../node_modules/@angular/cdk/layout';
// import { FooterComponent } from '../_components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
// import { OfertaHeadersComponent } from '../_components/_oferta-educativa/oferta-headers/oferta-headers.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
    declarations: [
        // FooterComponent,
        // OfertaHeadersComponent
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
        MatSidenavModule
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
        // FooterComponent,
        // OfertaHeadersComponent
    ],
    providers: []
})

export class MaterialComponentsModule { }

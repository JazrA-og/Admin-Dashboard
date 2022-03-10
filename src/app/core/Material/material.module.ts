import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule
             ],
    exports: [
                MatButtonModule,
                MatIconModule,
                MatFormFieldModule,
                MatInputModule,
                MatCardModule,
                MatSelectModule,
                MatExpansionModule,
                MatSnackBarModule,
                MatCheckboxModule,
                MatToolbarModule,
                MatDialogModule,
                MatTabsModule,
                MatAutocompleteModule
             ]
})
export class MaterialModule {

}

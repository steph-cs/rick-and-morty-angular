/*Modules*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

/*Components*/
import { AppComponent } from './app.component';

/*pages*/
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/*components*/
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TextFilterComponent } from './shared/components/text-filter/text-filter.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CheckboxFilterComponent } from './shared/components/checkbox-filter/checkbox-filter.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { TextSectionComponent } from './shared/components/text-section/text-section.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { NavComponent } from './shared/components/nav/nav.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharactersComponent,
        LocationsComponent,
        EpisodesComponent,
        NotFoundComponent,
        CardComponent,
        HeaderComponent,
        TextFilterComponent,
        FooterComponent,
        CheckboxFilterComponent,
        ModalComponent,
        TextSectionComponent,
        ButtonComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        MatPaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

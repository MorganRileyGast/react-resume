import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { DetailsSection } from './components/DetailsSection.component';
import SiteNavbar from './components/SiteNavbar.component';
import DATA from './services/Data.service.json';
import { HomePage } from './components/HomePage.component';
import { ContactPage } from './components/ContactPage.component';
import { CreditsPage } from './components/CreditsPage.component';
import { NotFoundPage } from './components/NotFoundPage.component';

function Routing() {
    return (
        <HashRouter>
            <SiteNavbar />

            <div className="content-wrapper">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage />
                        }
                    />
                    <Route
                        path="/skills"
                        element={
                            <DetailsSection data={DATA.SKILLS} />
                        }
                    />
                    <Route
                        path="/career"
                        element={
                            <DetailsSection data={DATA.WORK} />
                        }
                    />
                    <Route
                        path="/education"
                        element={
                            <DetailsSection data={DATA.EDUCATION} />
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <ContactPage />
                        }
                    />
                    <Route
                        path="/credits"
                        element={
                            <CreditsPage />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <NotFoundPage />
                        }
                    />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default Routing;

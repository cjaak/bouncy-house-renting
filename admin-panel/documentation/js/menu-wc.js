'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">admin-panel documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3bebbeb939c2a22c0dc1801e64e6b33c94e4d230f44eb73c7f857f29d6e26f9dc91c0e38931508a53a49d6f04c2bed545aba825a1f44ba72d27d0fc8698a8932"' : 'data-target="#xs-components-links-module-AppModule-3bebbeb939c2a22c0dc1801e64e6b33c94e4d230f44eb73c7f857f29d6e26f9dc91c0e38931508a53a49d6f04c2bed545aba825a1f44ba72d27d0fc8698a8932"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3bebbeb939c2a22c0dc1801e64e6b33c94e4d230f44eb73c7f857f29d6e26f9dc91c0e38931508a53a49d6f04c2bed545aba825a1f44ba72d27d0fc8698a8932"' :
                                            'id="xs-components-links-module-AppModule-3bebbeb939c2a22c0dc1801e64e6b33c94e4d230f44eb73c7f857f29d6e26f9dc91c0e38931508a53a49d6f04c2bed545aba825a1f44ba72d27d0fc8698a8932"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-72bbf0fae62f83be9659150d3081f19ec1c196f7bebc5dc11f39af5b8d5ecc46bdf895c3b45b33dd7c12af3d5c7f1c7e36b7c6da038841750a193e00872337e4"' : 'data-target="#xs-components-links-module-AuthModule-72bbf0fae62f83be9659150d3081f19ec1c196f7bebc5dc11f39af5b8d5ecc46bdf895c3b45b33dd7c12af3d5c7f1c7e36b7c6da038841750a193e00872337e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-72bbf0fae62f83be9659150d3081f19ec1c196f7bebc5dc11f39af5b8d5ecc46bdf895c3b45b33dd7c12af3d5c7f1c7e36b7c6da038841750a193e00872337e4"' :
                                            'id="xs-components-links-module-AuthModule-72bbf0fae62f83be9659150d3081f19ec1c196f7bebc5dc11f39af5b8d5ecc46bdf895c3b45b33dd7c12af3d5c7f1c7e36b7c6da038841750a193e00872337e4"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BouncyHouseModule.html" data-type="entity-link" >BouncyHouseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BouncyHouseModule-5979bdd2ee098e16de48f1ce417aff253f44cfdbc4f86fa58e097b3e8f918ee1609cff19789661eda1fe8ae3508161d880120784337a81d954fef565027ebbb3"' : 'data-target="#xs-components-links-module-BouncyHouseModule-5979bdd2ee098e16de48f1ce417aff253f44cfdbc4f86fa58e097b3e8f918ee1609cff19789661eda1fe8ae3508161d880120784337a81d954fef565027ebbb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BouncyHouseModule-5979bdd2ee098e16de48f1ce417aff253f44cfdbc4f86fa58e097b3e8f918ee1609cff19789661eda1fe8ae3508161d880120784337a81d954fef565027ebbb3"' :
                                            'id="xs-components-links-module-BouncyHouseModule-5979bdd2ee098e16de48f1ce417aff253f44cfdbc4f86fa58e097b3e8f918ee1609cff19789661eda1fe8ae3508161d880120784337a81d954fef565027ebbb3"' }>
                                            <li class="link">
                                                <a href="components/BouncyHouseFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouncyHouseFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouncyHousePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHousePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouncyHouseTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataAccessModule.html" data-type="entity-link" >DataAccessModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RentedModule.html" data-type="entity-link" >RentedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RentedModule-d1d13b66f9e55ad5446cbc028ebfe10ed9c6cdc14e60890f21a9c68211fa03d8d4fdff598d2a6ef5bb6a02e3d9a71c5cb40e2b05d1950d9805674949555c12c1"' : 'data-target="#xs-components-links-module-RentedModule-d1d13b66f9e55ad5446cbc028ebfe10ed9c6cdc14e60890f21a9c68211fa03d8d4fdff598d2a6ef5bb6a02e3d9a71c5cb40e2b05d1950d9805674949555c12c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RentedModule-d1d13b66f9e55ad5446cbc028ebfe10ed9c6cdc14e60890f21a9c68211fa03d8d4fdff598d2a6ef5bb6a02e3d9a71c5cb40e2b05d1950d9805674949555c12c1"' :
                                            'id="xs-components-links-module-RentedModule-d1d13b66f9e55ad5446cbc028ebfe10ed9c6cdc14e60890f21a9c68211fa03d8d4fdff598d2a6ef5bb6a02e3d9a71c5cb40e2b05d1950d9805674949555c12c1"' }>
                                            <li class="link">
                                                <a href="components/BouncyHouseDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedActivePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedActivePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedAllPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedAllPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedBouncyHousePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedBouncyHousePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedNewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedNewPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f5ce763864c3f545f4a5fcf014d4a1bcc6690e078bc26fea027065bbc6f598149d98366088e0609ded42782c2e12ffc1bb288a90aaa381c112502aa497ce2963"' : 'data-target="#xs-components-links-module-SharedModule-f5ce763864c3f545f4a5fcf014d4a1bcc6690e078bc26fea027065bbc6f598149d98366088e0609ded42782c2e12ffc1bb288a90aaa381c112502aa497ce2963"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f5ce763864c3f545f4a5fcf014d4a1bcc6690e078bc26fea027065bbc6f598149d98366088e0609ded42782c2e12ffc1bb288a90aaa381c112502aa497ce2963"' :
                                            'id="xs-components-links-module-SharedModule-f5ce763864c3f545f4a5fcf014d4a1bcc6690e078bc26fea027065bbc6f598149d98366088e0609ded42782c2e12ffc1bb288a90aaa381c112502aa497ce2963"' }>
                                            <li class="link">
                                                <a href="components/DeleteButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-b1d0315aaa8cfae879afdc495f3f3f7fe4e467aacfe427feaed33d12fddb066d8380a7fb2fd317a196e836fba5f711e4535bd9402e5b4475c4004058f07c49fa"' : 'data-target="#xs-components-links-module-UserModule-b1d0315aaa8cfae879afdc495f3f3f7fe4e467aacfe427feaed33d12fddb066d8380a7fb2fd317a196e836fba5f711e4535bd9402e5b4475c4004058f07c49fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-b1d0315aaa8cfae879afdc495f3f3f7fe4e467aacfe427feaed33d12fddb066d8380a7fb2fd317a196e836fba5f711e4535bd9402e5b4475c4004058f07c49fa"' :
                                            'id="xs-components-links-module-UserModule-b1d0315aaa8cfae879afdc495f3f3f7fe4e467aacfe427feaed33d12fddb066d8380a7fb2fd317a196e836fba5f711e4535bd9402e5b4475c4004058f07c49fa"' }>
                                            <li class="link">
                                                <a href="components/UserPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BouncyHouse.html" data-type="entity-link" >BouncyHouse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rented.html" data-type="entity-link" >Rented</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BouncyHouseService.html" data-type="entity-link" >BouncyHouseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockAuthService.html" data-type="entity-link" >MockAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RentedService.html" data-type="entity-link" >RentedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackService.html" data-type="entity-link" >SnackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomResponse.html" data-type="entity-link" >CustomResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
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
                    <a href="index.html" data-type="index-link">demo-app documentation</a>
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
                                            'data-target="#components-links-module-AppModule-f7e73ab092e069ba902a1f580cc2ab02c0135be676fb842ab55b75c01cb29ebe84420e50b11cdbb8277b5e673f6509131aa4c395447dc32bc67087993703bbd1"' : 'data-target="#xs-components-links-module-AppModule-f7e73ab092e069ba902a1f580cc2ab02c0135be676fb842ab55b75c01cb29ebe84420e50b11cdbb8277b5e673f6509131aa4c395447dc32bc67087993703bbd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f7e73ab092e069ba902a1f580cc2ab02c0135be676fb842ab55b75c01cb29ebe84420e50b11cdbb8277b5e673f6509131aa4c395447dc32bc67087993703bbd1"' :
                                            'id="xs-components-links-module-AppModule-f7e73ab092e069ba902a1f580cc2ab02c0135be676fb842ab55b75c01cb29ebe84420e50b11cdbb8277b5e673f6509131aa4c395447dc32bc67087993703bbd1"' }>
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
                                            'data-target="#components-links-module-AuthModule-72326e78fb0481b2ff6b672eb16eca412e472b23877d440793c27a71a7f0075317b6ae5dcf6fb0bd8bfa58e1a2811075b3be19d3bd60f1a19976767a3a5baca6"' : 'data-target="#xs-components-links-module-AuthModule-72326e78fb0481b2ff6b672eb16eca412e472b23877d440793c27a71a7f0075317b6ae5dcf6fb0bd8bfa58e1a2811075b3be19d3bd60f1a19976767a3a5baca6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-72326e78fb0481b2ff6b672eb16eca412e472b23877d440793c27a71a7f0075317b6ae5dcf6fb0bd8bfa58e1a2811075b3be19d3bd60f1a19976767a3a5baca6"' :
                                            'id="xs-components-links-module-AuthModule-72326e78fb0481b2ff6b672eb16eca412e472b23877d440793c27a71a7f0075317b6ae5dcf6fb0bd8bfa58e1a2811075b3be19d3bd60f1a19976767a3a5baca6"' }>
                                            <li class="link">
                                                <a href="components/AuthPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BouncyHouseModule.html" data-type="entity-link" >BouncyHouseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BouncyHouseModule-247762f1f6a903d7fcb6328ce196ca9ec9f200c581bea280ebbe9e7050e7b920c5bbe122885ee0046f29cba13d1425fa089820e59771354ffd1e5e4fe3e8668b"' : 'data-target="#xs-components-links-module-BouncyHouseModule-247762f1f6a903d7fcb6328ce196ca9ec9f200c581bea280ebbe9e7050e7b920c5bbe122885ee0046f29cba13d1425fa089820e59771354ffd1e5e4fe3e8668b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BouncyHouseModule-247762f1f6a903d7fcb6328ce196ca9ec9f200c581bea280ebbe9e7050e7b920c5bbe122885ee0046f29cba13d1425fa089820e59771354ffd1e5e4fe3e8668b"' :
                                            'id="xs-components-links-module-BouncyHouseModule-247762f1f6a903d7fcb6328ce196ca9ec9f200c581bea280ebbe9e7050e7b920c5bbe122885ee0046f29cba13d1425fa089820e59771354ffd1e5e4fe3e8668b"' }>
                                            <li class="link">
                                                <a href="components/BouncyHouseDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouncyHousePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHousePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataAccessModule.html" data-type="entity-link" >DataAccessModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavouriteModule.html" data-type="entity-link" >FavouriteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavouriteModule-a7994e6eb416fdae619c4c091d0dc53ea0967f44393ac8aada1df6bb5c8bff69ffc6105dc2cbf1fe3949a4b8fa1eb49beb7f14484f67bfd451f22d08cec8607a"' : 'data-target="#xs-components-links-module-FavouriteModule-a7994e6eb416fdae619c4c091d0dc53ea0967f44393ac8aada1df6bb5c8bff69ffc6105dc2cbf1fe3949a4b8fa1eb49beb7f14484f67bfd451f22d08cec8607a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavouriteModule-a7994e6eb416fdae619c4c091d0dc53ea0967f44393ac8aada1df6bb5c8bff69ffc6105dc2cbf1fe3949a4b8fa1eb49beb7f14484f67bfd451f22d08cec8607a"' :
                                            'id="xs-components-links-module-FavouriteModule-a7994e6eb416fdae619c4c091d0dc53ea0967f44393ac8aada1df6bb5c8bff69ffc6105dc2cbf1fe3949a4b8fa1eb49beb7f14484f67bfd451f22d08cec8607a"' }>
                                            <li class="link">
                                                <a href="components/BouncyHouseListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptyFavouritesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptyFavouritesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavouriteBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavouriteBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavouritePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavouritePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-47ab4a561f9a6a1e022cbe253ef4e3b468c742e5047d3e07885d2d94c49915b472c31db009079675f69550d57a8f1d3787316cb0d0956646928e915bb107aaad"' : 'data-target="#xs-components-links-module-HomeModule-47ab4a561f9a6a1e022cbe253ef4e3b468c742e5047d3e07885d2d94c49915b472c31db009079675f69550d57a8f1d3787316cb0d0956646928e915bb107aaad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-47ab4a561f9a6a1e022cbe253ef4e3b468c742e5047d3e07885d2d94c49915b472c31db009079675f69550d57a8f1d3787316cb0d0956646928e915bb107aaad"' :
                                            'id="xs-components-links-module-HomeModule-47ab4a561f9a6a1e022cbe253ef4e3b468c742e5047d3e07885d2d94c49915b472c31db009079675f69550d57a8f1d3787316cb0d0956646928e915bb107aaad"' }>
                                            <li class="link">
                                                <a href="components/FilterBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-729146191f0ea4e83ebe665828fbcb5570f556c3046472364dfd3030f44a08b5570b440bc75c1a2c0fd3bf4d40e134232c4ecd19283e2a54e45f3bc6bf6fcf27"' : 'data-target="#xs-components-links-module-ProfileModule-729146191f0ea4e83ebe665828fbcb5570f556c3046472364dfd3030f44a08b5570b440bc75c1a2c0fd3bf4d40e134232c4ecd19283e2a54e45f3bc6bf6fcf27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-729146191f0ea4e83ebe665828fbcb5570f556c3046472364dfd3030f44a08b5570b440bc75c1a2c0fd3bf4d40e134232c4ecd19283e2a54e45f3bc6bf6fcf27"' :
                                            'id="xs-components-links-module-ProfileModule-729146191f0ea4e83ebe665828fbcb5570f556c3046472364dfd3030f44a08b5570b440bc75c1a2c0fd3bf4d40e134232c4ecd19283e2a54e45f3bc6bf6fcf27"' }>
                                            <li class="link">
                                                <a href="components/ProfileBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RentingModule.html" data-type="entity-link" >RentingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RentingModule-19fe5013258d8d7cdca5740463ea42252298fa7f9b960f2ca58f27fa9eb5450253e5cf7cf15c3777c7efb803fa8acec0244a055dc1441c816fd6ed4030250025"' : 'data-target="#xs-components-links-module-RentingModule-19fe5013258d8d7cdca5740463ea42252298fa7f9b960f2ca58f27fa9eb5450253e5cf7cf15c3777c7efb803fa8acec0244a055dc1441c816fd6ed4030250025"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RentingModule-19fe5013258d8d7cdca5740463ea42252298fa7f9b960f2ca58f27fa9eb5450253e5cf7cf15c3777c7efb803fa8acec0244a055dc1441c816fd6ed4030250025"' :
                                            'id="xs-components-links-module-RentingModule-19fe5013258d8d7cdca5740463ea42252298fa7f9b960f2ca58f27fa9eb5450253e5cf7cf15c3777c7efb803fa8acec0244a055dc1441c816fd6ed4030250025"' }>
                                            <li class="link">
                                                <a href="components/RentingDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentingDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentingFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentingFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' : 'data-target="#xs-components-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' :
                                            'id="xs-components-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' }>
                                            <li class="link">
                                                <a href="components/BouncyHouseCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouncyHouseCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavouriteToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FavouriteToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconWithTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconWithTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentedCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentedCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' : 'data-target="#xs-pipes-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' :
                                            'id="xs-pipes-links-module-SharedModule-83c5901555c6bda60a2fce9186827dacfd448a73533fb559ab74050451d6ed7ee451d5576c9b0226cd6cc671a805c45935a776bc6319635495cebcc4f303f165"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SortPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SortPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BouncyHouseListComponent-1.html" data-type="entity-link" >BouncyHouseListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RatingListComponent-1.html" data-type="entity-link" >RatingListComponent</a>
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
                                <a href="classes/CustomValidators.html" data-type="entity-link" >CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favourite.html" data-type="entity-link" >Favourite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rating.html" data-type="entity-link" >Rating</a>
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
                                    <a href="injectables/CachingService.html" data-type="entity-link" >CachingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavouriteService.html" data-type="entity-link" >FavouriteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterService.html" data-type="entity-link" >FilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockAuthService.html" data-type="entity-link" >MockAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RatingService.html" data-type="entity-link" >RatingService</a>
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
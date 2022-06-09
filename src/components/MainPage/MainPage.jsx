import './MainPage.css';

const MainPage = () => {
    return (
        <div className={'main-content'}>
            <div className={'banner'}>
                <div className={'banner-info'}>
                    <h2>Акция!</h2>
                    <p>Купи IPhone и получи чехол в подарок!</p>
                    <p className={'offer'}>*Акция действует до 30.06.2022</p>
                </div>
            </div>
            <div className={'bottom-banner'}>
                <div className={'gift'}>
                    <h3 className={'gift-text'}>ПОДАРОЧНЫЕ КАРТЫ</h3>
                    <p className={'gift-text'}>
                        Доставьте дорогому человеку удовольствие
                        выбрать подарок, который ему точно понравится!
                    </p>
                </div>
                <div className={'gift'}>
                    <h3 className={'gift-text'}>ДОПОЛНИТЕЛЬНАЯ БЕСПЛАТНАЯ ГАРАНТИЯ</h3>
                    <p className={'gift-text'}>
                        Дополнительная гарантия - представляет собой
                        бесплатное сервисное обслуживание приобретенных
                        у нас товаров на 2 года
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MainPage;
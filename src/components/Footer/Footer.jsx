import './Footer.css';

const Footer = () => {
    return(
        <div className={'footer-container'}>
            <div className={'footer-content'}>
                <div className={'footer-info'}>
                    <p>8 (800) 700-60-60</p>
                    <p>shop@yandex.ru</p>
                    <p>Пн-Пт: 09:00-21:00</p>
                    <p>Сб-Вс: 09:00-20:00</p>
                    <p>г. Тула, улица Болдина, 114</p>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.14864935496!2d37.58060839118482!3d54.16912898493957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41343ff9cb8e9f01%3A0x51f66db5334b65!2z0YPQuy4g0JHQvtC70LTQuNC90LAsINCi0YPQu9CwLCDQotGD0LvRjNGB0LrQsNGPINC-0LHQuy4sIDMwMDAyOA!5e0!3m2!1sru!2sru!4v1654744724720!5m2!1sru!2sru"
                        width="400" height="200" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer;
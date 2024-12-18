document.getElementById('copyright-year').textContent = new Date().getFullYear();

const translations = {
    en: {
        skills: 'Skills',
        projects: 'Projects',
        about: 'About',
        about_title: 'About',
        intro_text: `Hello! I'm {{name}}, a dedicated student currently pursuing the Full-stack Engineer Career Path at Codecademy. With a strong passion for programming, I am committed to building projects that solve real-world problems.`,
        hobbies_text: `Beyond coding, I'm an avid learner, exploring languages to connect with people across cultures. Traveling inspires my creativity, while photography allows me to capture and share meaningful moments.`,
        closing_text: `Feel free to explore my projects and reach out — I'm always excited to collaborate!`,
        coming_soon: `Coming soon!`,
        view_more: `View more`,
        copyright: `{{copyright}} Marit Pompe. All Rights Reserved.`,
        contact_header: `Ready to create something amazing? Let's connect and collaborate!`,
        label_name: `Your Name:`,
        label_email: `Your Email:`,
        label_subject: `Subject:`,
        label_message: `Message:`,
        label_submit: `Send Message`,
    },

nl: {
        skills: 'Vaardigheden',
        projects: 'Projecten',
        about: 'Over mij',
        about_title: 'Over mij',
        intro_text: `Hallo! Ik ben {{name}}, een toegewijde student die momenteel het Full-stack Engineer Carrièrepad volgt bij Codecademy. Ik heb een grote passie voor programmeren en ben toegewijd aan het bouwen van projecten die echte problemen oplossen.`,
        hobbies_text: `Naast programmeren ben ik een fanatieke leerling, die talen verkent om in contact te komen met mensen uit verschillende culturen. Reizen inspireert mijn creativiteit, terwijl fotografie me in staat stelt om betekenisvolle momenten vast te leggen en te delen.`,
        closing_text: `Voel je vrij om mijn projecten te verkennen en contact op te nemen — ik ben altijd enthousiast om samen te werken!`,
        coming_soon: `Binnenkort beschikbaar!`,
        view_more: `Bekijk meer`,
        copyright: `{{copyright}} Marit Pompe. Alle rechten voorbehouden.`,
        contact_header: `Klaar om samen iets geweldigs te creëren? Neem contact op!`,
        label_name: `Uw Naam:`,
        label_email: `Uw Email:`,
        label_subject: `Onderwerp:`,
        label_message: `Bericht:`,
        label_submit: `Verstuur Bericht`,
    }

}

function applyTranslations(language) {
    const nameHTML = `<span id='name'>Marit Pompe</span>`;
    const copyrightHTML = `&copy; <span id="copyright-year"></span>`;
    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            let translatedText = translations[language][key];
            translatedText = translatedText.replace(`{{name}}`, nameHTML);
            translatedText = translatedText.replace(`{{copyright}}`, copyrightHTML)
            element.innerHTML = translatedText;
        } 
    });
}

document.getElementById('languageSwitcher').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    applyTranslations(selectedLanguage);
})

applyTranslations('en');

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
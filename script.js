document.getElementById('copyright-year').textContent = new Date().getFullYear();

const translations = {
    en: {
        skills: 'Skills',
        projects: 'Projects',
        about: 'About',
        about_title: 'About',
        intro_text: `Hello! I'm {{name}}, a dedicated student currently pursuing the Full-stack Engineer Career Path at Codecademy. With a strong passion for coding, I am committed to building user-centric projects that solve real-world problems. My experience in hospitality has equipped me with invaluable skills in communication, teamwork, and problem-solving, which I now wish to apply in the tech world to create seamless and engaging digital experiences.`,
        hobbies_text: `Beyond coding, I'm an avid learner, exploring languages to connect with people across cultures. Traveling inspires my creativity, while photography allows me to capture and share meaningful moments. Together, these experiences shape my unique perspective as a developer.`,
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
        intro_text: `Hallo! Ik ben {{name}}, een toegewijde student die momenteel het Full-stack Engineer Carrièrepad volgt bij Codecademy. Ik heb een grote passie voor programmeren en ben toegewijd aan het bouwen van gebruikersgerichte projecten die echte problemen oplossen. Mijn ervaring in de horeca heeft me vaardigheden van onschatbare waarde bijgebracht op het gebied van communicatie, teamwork en het oplossen van problemen, die ik nu wil toepassen in de technische wereld om naadloze en fascinerende digitale ervaringen te creëren.`,
        hobbies_text: `Naast programmeren ben ik een fanatieke leerling, die talen verkent om in contact te komen met mensen uit verschillende culturen. Reizen inspireert mijn creativiteit, terwijl fotografie me in staat stelt om betekenisvolle momenten vast te leggen en te delen. Samen vormen deze ervaringen mijn unieke perspectief als ontwikkelaar.`,
        closing_text: `Voel je vrij om mijn projecten te verkennen en contact op te nemen — ik ben altijd enthousiast om samen te werken!`,
        coming_soon: `Binnenkort beschikbaar!`,
        view_more: `Bekijk meer`,
        copyright: `{{copyright}} Marit Pompe. Alle rechten voorbehouden.`,
        contact_header: `Klaar om samen iets verbluffends te creëren? Neem contact op!`,
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
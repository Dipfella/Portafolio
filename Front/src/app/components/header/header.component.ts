import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  sections!: NodeListOf<HTMLElement>;
  navLinks!: NodeListOf<HTMLElement>;

  ngAfterViewInit(): void {
    document.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    this.sections = document.querySelectorAll('section');
    this.navLinks = document.querySelectorAll('nav a');
    const { scrollY } = window;

    this.sections.forEach((section) => {
      const { id, offsetTop, offsetHeight } = section;
      const offset = offsetTop - 150;

      if (scrollY >= offset && scrollY < offset + offsetHeight  ) {
        this.navLinks.forEach((link) => link.classList.remove('active'));
        this.navLinks.forEach((link) => {
          if (link.dataset['scroll'] == id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

}

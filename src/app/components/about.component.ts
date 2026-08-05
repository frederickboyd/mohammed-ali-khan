import { Component } from '@angular/core';
import { personal } from '../config';
import { FadeInDirective } from '../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInDirective],
  template: `
    <section id="about">
      <div class="container">
        <h2 class="section-title" [appFadeIn]="0">About <span>Me</span></h2>

        <div class="grid">
          <div class="text-col" [appFadeIn]="100">
            @for (paragraph of bio; track $index) {
              <p>{{ paragraph }}</p>
            }

            <dl class="facts">
              <div class="fact">
                <dt>Based in</dt>
                <dd>{{ location }}</dd>
              </div>
              <div class="fact">
                <dt>Available for</dt>
                <dd>{{ availability }}</dd>
              </div>
              <div class="fact">
                <dt>Email</dt>
                <dd><a [href]="'mailto:' + email">{{ email }}</a></dd>
              </div>
              <div class="fact">
                <dt>Education</dt>
                <dd>{{ education }}</dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 110px 0;
      background: transparent;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ── Section Title ── */
    .section-title {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 3.5rem;
    }

    .section-title span { color: #e53935; }

    .section-title::after {
      content: '';
      display: block;
      width: 38px;
      height: 3px;
      background: #e53935;
      border-radius: 2px;
      margin-top: 0.75rem;
    }

    /* ── Grid ── */
    .grid {
      max-width: 850px;
    }

    /* ── Text ── */
    .text-col p {
      color: #808080;
      font-size: 1rem;
      line-height: 1.85;
      margin-bottom: 1.2rem;
    }

    .facts {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }

    .fact {
      display: flex;
      align-items: baseline;
      gap: 1rem;
    }

    dt {
      font-size: 0.8rem;
      font-weight: 600;
      color: #303030;
      min-width: 105px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    dd {
      font-size: 0.9rem;
      color: #c0c0c0;
      font-weight: 500;
    }

    dd a {
      color: #e53935;
      text-decoration: none;
    }

    dd a:hover { text-decoration: underline; }

  `],
})
export class AboutComponent {
  bio          = personal.bio;
  location     = personal.location;
  availability = personal.availability;
  email        = personal.email;
  education    = personal.education;
}

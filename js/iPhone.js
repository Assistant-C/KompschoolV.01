const messages = [
  [
    // Унікальна програма
    {
      user: 'robot',
      message: `Привіт, я віртуальний помічник ШКМ! Я ваш професійний асистент.`,
      delay: 1000,
    },
    {
      user: 'robot',
      message: `Чим я можу допомогти вам?`,
      delay: 1500,
    },
    {
      user: 'user',
      message: `Розкажіть про унікальну программу`,
      delay: 2500,
    },
    {
      user: 'robot',
      message: `Учбова програма, за якою займаються учні, змінюється та вдосконалюється щорічно. Поле наших знань лежить в сфері САЙТОБУДУВАННЯ, а саме FRONT-END розробки, яка на даний момент розвивається найшвидше.`,
      delay: 3000,
    },
    {
      user: 'robot',
      message: `Статистика розвитку даної сфери показує, що в майбутньому потреба в знаннях даного типу буде тільки зростати.`,
      delay: 4000,
    },
    {
      user: 'robot',
      message: `Це гарантовано дає можливість нашим учням отримати престижну та високооплачувану професію.`,
      delay: 4500,
    },
  ],
    // Індивідуальний підхід
  [
    {
      user: 'user',
      message: 'Розкажіть про індивідуальний підхід',
      delay: 1000,
    },
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1500,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 2000,
    },
  ],
    // Професійні викладачі
  [
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1000,
    },
    {
      user: 'user',
      message: 'Точно любий?',
      delay: 2000,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 3000,
    },
  ],
    // Диплом по завершенню навчання
  [
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1000,
    },
    {
      user: 'user',
      message: 'Точно любий?',
      delay: 2000,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 3000,
    },
  ],
  // Зручний формат навчання
  [
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1000,
    },
    {
      user: 'user',
      message: 'Точно любий?',
      delay: 2000,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 3000,
    },
  ],
  // Багато практики
  [
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1000,
    },
    {
      user: 'user',
      message: 'Точно любий?',
      delay: 2000,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 3000,
    },
  ],
  // Соціальні проекти
  [
    {
      user: 'robot',
      message: 'Любий текст',
      delay: 1000,
    },
    {
      user: 'user',
      message: 'Точно любий?',
      delay: 2000,
    },
    {
      user: 'robot',
      message: 'Так звісно!',
      delay: 3000,
    },
  ],
];

const accordeon = document.querySelector('.accordeon');

class Queue {
  constructor() {
    this.queue = [];
  }
  add(fn) {
    this.queue.push(fn);
    return this.runNext();
  }
  runNext() {
    if (this.queue.length > 0) {
      const fn = this.queue.shift();
      return fn().then(() => this.runNext());
    }
    return Promise.resolve();
  }
}
const queue = new Queue();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const delayWithQueue = (ms) => queue.add(() => delay(ms));

accordeon.addEventListener('click', function ({ target }) {
  const button = target.closest('button');
  if (button) {
    accordeon.querySelector('.active')?.classList.remove('active');
    button.classList.add('active');
    addDialogue(messages[button.tabIndex - 1]);
  }
});

function addDialogue(dialogue) {
  for (const { user, message, delay } of dialogue) {
    delayWithQueue(delay).then(() => addMessage(user, message));
  }
}

function addMessage(user, message) {
  const chat = document.querySelector('.chat');
  const now = new Date();
  const hoursAndMinutes = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  chat.innerHTML += `
	<div class="message ${user}">
		<span class="avatar">${
      user === 'user'
        ? '<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;w=1000&amp;q=80" alt="">'
        : '<img src="./img/znak.png" alt=""/>'
    }</span>
		<div class="baloon">
			${message}
			<p class="time">${hoursAndMinutes}</p>
		</div>
	</div>`;
  chat.querySelector('.message:last-child').scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start',
  });
}

// remove scroll bar if inactive
const showScrollbars = (evt) => {
  const el = evt.currentTarget;
  clearTimeout(el._scrolling);
  el.classList.add('is-scrolling');
  el._scrolling = setTimeout(() => {
    el.classList.remove('is-scrolling');
  }, 2000);
};

document.querySelectorAll('[data-scrollbars]').forEach((el) => {
  el.addEventListener('scroll', showScrollbars);
});

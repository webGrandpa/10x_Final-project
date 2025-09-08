import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Эта функция вызывается при каждом изменении маршрута.
    // Она прокручивает окно в самую верхнюю часть (0, 0).
    window.scrollTo(0, 0);
  }, [pathname]); // Зависимость от pathname гарантирует, что эффект сработает при смене страницы.

  return null; // Этот компонент ничего не рендерит, он просто выполняет побочный эффект.
};

export default ScrollToTop;

import { useState } from 'react'

export default function Navbar() {
  const [space, setSpace] = useState(13)

  return (
    <div className="fixed z-40 bottom-7 h-14 mx-8 w-80 bg-text rounded-2xl">
      <div className="relative w-full h-full">
        <div
          id="front_items"
          className="flex absolute z-20 w-20 h-20 -translate-y-3 rounded-full overflow-hidden bg-purple-500 transition-all duration-1000"
          style={{ left: space }}
        >
          <div
            className="min-w-[20rem] items-center justify-around flex transition-all duration-1000"
            style={{ marginLeft: -space }}
          >
            <div>
              <img src="/assets/img/logo.png" className="w-16 h-16" />
            </div>

            <div>
              <img src="/assets/img/logo.png" className="w-16 h-16" />
            </div>

            <div>
              <img src="/assets/img/logo.png" className="w-16 h-16" />
            </div>
          </div>
        </div>

        <div
          id="back_items"
          className="flex justify-around w-full items-center h-full"
        >
          <div>
            <img
              src="/assets/img/logo_locked.png"
              onClick={() => setSpace(13)}
              className="w-8"
            />
          </div>

          <div>
            <img
              src="/assets/img/logo_locked.png"
              onClick={() => setSpace(120)}
              className="w-8"
            />
          </div>

          <div>
            <img
              src="/assets/img/logo_locked.png"
              onClick={() => setSpace(227)}
              className="w-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client';

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-10 bg-black border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border border-orange-500/10 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-3">
            {/* Warning icon */}
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-orange-500/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-orange-500/80 font-bold text-sm uppercase tracking-wider mb-3">Disclaimer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                By visiting https://tiger365onlineid.com, you accept and agree to the following terms and conditions: Tiger365 Online ID is an information site only. We do not provide betting services. This site is purely informational, and we do not have any betting or gambling platform. We only help our clients offer online gaming IDs and do not engage in any betting activities on any betting sites. Therefore, we do not take any responsibility for any losses incurred by a client accessing the betting sites. Each client must ensure that it is legal to access these sites in their country of residence. In addition, we do not take any responsibility for any issues and liabilities that may arise from use of the gaming IDs provided by our company. Please make sure that it is legal to access online IDs in your country before using them. By using our website, you accept these terms and conditions and accept this disclaimer of any responsibility. Gambling can be addictive; therefore, betting should be done responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
